import { IconDeviceFloppy, IconPlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { gql } from "../../__generated__";
import { useMutation, useQuery } from "@apollo/client";

const FoldersQueryDocument = gql(`
  query Folders {
    folders {
      id
      title
    }
  }
`);

const AddFolderMutationDocument = gql(`
  mutation AddFolder($addFolderInput: AddFolderInput!) {
    addFolder(addFolderInput: $addFolderInput) {
      id
    }
  }
`);

type Props = {
  onChange?: (id: number) => void;
  currentFolder: null | number;
  refresh?: () => void;
};

export default function FoldersBar({ onChange, currentFolder }: Props) {
  const { data, refetch } = useQuery(FoldersQueryDocument);

  const [isEditing, setIsEditing] = useState(false);
  const [newFolderTitle, setNewFolderTitle] = useState<string>("");

  const [addTodoMutation] = useMutation(AddFolderMutationDocument, {
    variables: { addFolderInput: { title: newFolderTitle } },
  });

  useEffect(() => {
    if (data && !currentFolder && onChange)
      onChange(Number(data.folders[0].id));
  }, [data, currentFolder, onChange]);

  const handeAddClick = async () => {
    if (!isEditing) setIsEditing(true);
    else if (newFolderTitle) {
      await addTodoMutation();
      await refetch();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setNewFolderTitle(target.value);
  };

  return (
    <div className="flex  h-full flex-col gap-y-0.5 p-2">
      {data
        ? data.folders.map((folder) => (
            <button
              onClick={() => onChange?.(Number(folder.id))}
              key={folder.id}
              className="h-12 rounded-xl bg-blue-100 pl-[10%] text-left transition hover:bg-blue-500 hover:text-white"
            >
              {folder.title}
            </button>
          ))
        : null}
      <button
        onClick={handeAddClick}
        className="mt-auto flex h-12 items-center gap-2 rounded-xl pl-[10%] text-left transition hover:bg-blue-500 hover:text-white"
      >
        {isEditing ? <IconDeviceFloppy /> : <IconPlus />}
        {isEditing ? "Сохранить" : "Добавить"}
      </button>
      {isEditing ? (
        <input
          onChange={handleInput}
          className="h-8 rounded border border-blue-100 px-2 outline-none transition focus:border-blue-500"
        />
      ) : null}
    </div>
  );
}
