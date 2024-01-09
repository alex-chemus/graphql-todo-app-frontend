import { useState } from "react";
import { Todo } from "../../__generated__/graphql";
import { gql } from "../../__generated__";
import { useMutation } from "@apollo/client";

enum Status {
  planned = "Planned",
  active = "Active",
  done = "Done",
}

enum StatusId {
  "Planned" = 1,
  "Active" = 2,
  "Done" = 3,
}

const CHANGE_TODO_STATUS_MUTATION = gql(`
  mutation ChangeTodoStatus($todoId: Int!, $statusId: Int!) {
    changeTodoStatus(todoId: $todoId, statusId: $statusId) {
      id
    }
  }
`);

type StatusBadgeProps = { status: Status; onClick?: () => void };

const StatusBadge = ({ status, onClick }: StatusBadgeProps) => {
  switch (status) {
    case Status.planned:
      return (
        <div onClick={onClick} className="w-fit rounded-md bg-yellow-500 px-1">
          {status}
        </div>
      );
    case Status.active:
      return (
        <div
          onClick={onClick}
          className="w-fit rounded-md bg-blue-500 px-1 text-white"
        >
          {status}
        </div>
      );
    case Status.done:
      return (
        <div
          onClick={onClick}
          className="w-fit rounded-md bg-green-500 px-1 text-white"
        >
          {status}
        </div>
      );
    default:
      return null;
  }
};

type TodoItemProps = {
  refresh?: () => void; // will be called when todo is updated
  todo: Omit<Todo, "folder" | "status"> & {
    status: { title: string };
  };
};

export default function TodoItem({ todo, refresh }: TodoItemProps) {
  const [changeTodoStatusMutation] = useMutation(CHANGE_TODO_STATUS_MUTATION);

  const [open, setOpen] = useState(false);

  const getNextStatus = () => {
    if (todo.status.title === Status.planned) return Status.active;
    if (todo.status.title === Status.active) return Status.done;
    return null;
  };

  const handleChangeStatus = async (status: Status) => {
    await changeTodoStatusMutation({
      variables: {
        todoId: Number(todo.id),
        statusId: StatusId[status],
      },
    });
    refresh?.();
  };

  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-blue-100 px-2.5 py-2">
      <div className="flex justify-between">
        <button onClick={() => setOpen((prev) => !prev)}>{todo.title}</button>
        <StatusBadge status={todo.status.title as Status} />
      </div>
      {open ? (
        <>
          <div>{todo.text}</div>
          {getNextStatus() ? (
            <button
              className="flex items-baseline gap-1"
              onClick={() => handleChangeStatus(getNextStatus()!)}
            >
              Перевести в <StatusBadge status={getNextStatus() as Status} />
            </button>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
