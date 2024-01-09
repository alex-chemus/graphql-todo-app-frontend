import { Status } from "./TodoItem";

type StatusBadgeProps = { status: Status; onClick?: () => void };

export default function StatusBadge({ status, onClick }: StatusBadgeProps) {
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
}