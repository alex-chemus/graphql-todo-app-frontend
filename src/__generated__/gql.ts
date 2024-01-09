/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Folders {\n    folders {\n      id\n      title\n    }\n  }\n": types.FoldersDocument,
    "\n  mutation AddFolder($addFolderInput: AddFolderInput!) {\n    addFolder(addFolderInput: $addFolderInput) {\n      id\n    }\n  }\n": types.AddFolderDocument,
    "\n  mutation ChangeTodoStatus($todoId: Int!, $statusId: Int!) {\n    changeTodoStatus(todoId: $todoId, statusId: $statusId) {\n      id\n    }\n  }\n": types.ChangeTodoStatusDocument,
    "\n  query Todos($folderId: Int!) {\n    folder(id: $folderId) {\n      todos {\n        id\n        title\n        text\n        status {\n          title\n        }\n      }\n    }\n  }\n": types.TodosDocument,
    "\n  mutation AddTodo($addTodoInput: AddTodoInput!) {\n    addTodo(addTodoInput: $addTodoInput) {\n      id\n    }\n  }\n": types.AddTodoDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Folders {\n    folders {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query Folders {\n    folders {\n      id\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddFolder($addFolderInput: AddFolderInput!) {\n    addFolder(addFolderInput: $addFolderInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddFolder($addFolderInput: AddFolderInput!) {\n    addFolder(addFolderInput: $addFolderInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ChangeTodoStatus($todoId: Int!, $statusId: Int!) {\n    changeTodoStatus(todoId: $todoId, statusId: $statusId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation ChangeTodoStatus($todoId: Int!, $statusId: Int!) {\n    changeTodoStatus(todoId: $todoId, statusId: $statusId) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Todos($folderId: Int!) {\n    folder(id: $folderId) {\n      todos {\n        id\n        title\n        text\n        status {\n          title\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Todos($folderId: Int!) {\n    folder(id: $folderId) {\n      todos {\n        id\n        title\n        text\n        status {\n          title\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddTodo($addTodoInput: AddTodoInput!) {\n    addTodo(addTodoInput: $addTodoInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddTodo($addTodoInput: AddTodoInput!) {\n    addTodo(addTodoInput: $addTodoInput) {\n      id\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;