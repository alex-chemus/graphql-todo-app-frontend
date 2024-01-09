import TabBar from "./components/FoldersBar/FoldersBar";
import TodosList from "./components/TodosList/TodosList";
import { useState } from "react";

function App() {
  const [currentFolder, setCurrentFolder] = useState<number | null>(null);

  return (
    <div className="grid h-svh grid-cols-4">
      <TabBar onChange={setCurrentFolder} currentFolder={currentFolder} />
      {currentFolder !== null ? <TodosList folderId={currentFolder} /> : null}
    </div>
  );
}

export default App;
