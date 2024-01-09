/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddFolderInput = {
  title: Scalars['String']['input'];
};

export type AddTodoInput = {
  folderId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Folder = {
  __typename?: 'Folder';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  todos: Array<Maybe<Todo>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFolder: Folder;
  addTodo: Todo;
  changeTodoStatus: Todo;
};


export type MutationAddFolderArgs = {
  addFolderInput: AddFolderInput;
};


export type MutationAddTodoArgs = {
  addTodoInput: AddTodoInput;
};


export type MutationChangeTodoStatusArgs = {
  statusId: Scalars['Int']['input'];
  todoId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  folder: Folder;
  folders: Array<Folder>;
  status: Status;
  statusList: Array<Status>;
  todo: Todo;
  todos: Array<Todo>;
};


export type QueryFolderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStatusArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTodoArgs = {
  id: Scalars['Int']['input'];
};

export type Status = {
  __typename?: 'Status';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  todos: Array<Maybe<Todo>>;
};

export type Todo = {
  __typename?: 'Todo';
  folder: Folder;
  id: Scalars['ID']['output'];
  status: Status;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type FoldersQueryVariables = Exact<{ [key: string]: never; }>;


export type FoldersQuery = { __typename?: 'Query', folders: Array<{ __typename?: 'Folder', id: string, title: string }> };

export type AddFolderMutationVariables = Exact<{
  addFolderInput: AddFolderInput;
}>;


export type AddFolderMutation = { __typename?: 'Mutation', addFolder: { __typename?: 'Folder', id: string } };

export type ChangeTodoStatusMutationVariables = Exact<{
  todoId: Scalars['Int']['input'];
  statusId: Scalars['Int']['input'];
}>;


export type ChangeTodoStatusMutation = { __typename?: 'Mutation', changeTodoStatus: { __typename?: 'Todo', id: string } };

export type TodosQueryVariables = Exact<{
  folderId: Scalars['Int']['input'];
}>;


export type TodosQuery = { __typename?: 'Query', folder: { __typename?: 'Folder', todos: Array<{ __typename?: 'Todo', id: string, title: string, text: string, status: { __typename?: 'Status', title: string } } | null> } };

export type AddTodoMutationVariables = Exact<{
  addTodoInput: AddTodoInput;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo: { __typename?: 'Todo', id: string } };


export const FoldersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Folders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"folders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FoldersQuery, FoldersQueryVariables>;
export const AddFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addFolderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddFolderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addFolderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addFolderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddFolderMutation, AddFolderMutationVariables>;
export const ChangeTodoStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeTodoStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"statusId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeTodoStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"todoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoId"}}},{"kind":"Argument","name":{"kind":"Name","value":"statusId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"statusId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ChangeTodoStatusMutation, ChangeTodoStatusMutationVariables>;
export const TodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Todos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"folder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TodosQuery, TodosQueryVariables>;
export const AddTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addTodoInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addTodoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addTodoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddTodoMutation, AddTodoMutationVariables>;