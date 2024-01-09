import { useMutation, useQuery } from "@apollo/client";
import { gql } from "../../__generated__";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem/TodoItem";

const TODOS_QUERY = gql(`
  query Todos($folderId: Int!) {
    folder(id: $folderId) {
      todos {
        id
        title
        text
        status {
          title
        }
      }
    }
  }
`);

const ADD_TODO_MUTATION = gql(`
  mutation AddTodo($addTodoInput: AddTodoInput!) {
    addTodo(addTodoInput: $addTodoInput) {
      id
    }
  }
`);

type TodosListProps = {
  folderId: number;
};

// eslint-disable-next-line
const buttonClassName: React.HtmlHTMLAttributes<any>["className"] =
  "flex h-12 w-[150px] items-center justify-center gap-2 rounded-xl transition hover:bg-blue-500 hover:text-white border";

export default function TodosList({ folderId }: TodosListProps) {
  const { data, refetch } = useQuery(TODOS_QUERY, { variables: { folderId } });

  const [formState, setFormState] = useState({
    title: "",
    text: "",
    open: false,
  });

  const [addTodoMutation] = useMutation(ADD_TODO_MUTATION, {
    variables: {
      addTodoInput: {
        title: formState.title,
        text: formState.text,
        folderId,
      },
    },
  });

  useEffect(() => {
    refetch();
  }, [folderId]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setFormState((prevState) => ({ ...prevState, title: value }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    setFormState((prevState) => ({ ...prevState, text: value }));
  };

  const handleSubmit = async () => {
    if (formState.title && formState.text) {
      await addTodoMutation();
      await refetch();
    }
  };

  return (
    <main className="col-span-3 p-10">
      {data ? (
        <div className="mx-auto flex w-1/2 flex-col gap-2">
          {data.folder.todos.map((todo) => (
            <TodoItem todo={todo!} refresh={() => refetch()} />
          ))}
        </div>
      ) : null}

      <button
        onClick={() =>
          setFormState((prevState) => ({ ...prevState, open: !prevState.open }))
        }
        className={`${buttonClassName} mb-3`}
      >
        {formState.open ? "Отмена" : "Добавить"}
      </button>

      {formState.open ? (
        <div className="flex flex-col gap-2.5 rounded-xl border border-blue-100 p-5">
          <input
            className="h-8 rounded border border-blue-100 px-2 outline-none transition focus:border-blue-500"
            onChange={handleTitleChange}
            name="title"
            placeholder="Название"
          />
          <textarea
            className="rounded border border-blue-100 px-2 outline-none transition focus:border-blue-500"
            onChange={handleTextChange}
            name="text"
            placeholder="Текст"
          />
          <button className={buttonClassName} onClick={handleSubmit}>
            Сохранить
          </button>
        </div>
      ) : null}
    </main>
  );
}
