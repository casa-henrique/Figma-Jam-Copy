import * as Toolbar from "@radix-ui/react-toolbar";
import { useCallback } from "react";
import ReactFlow, {
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { zinc } from "tailwindcss/colors";
import DefaultEdge from "./components/edges/DefaultEdges";
import { Circle } from "./components/nodes/Circle";
import { Square } from "./components/nodes/Square";

const NODE_TYPES = {
  square: Square,
  circle: Circle,
};

const EDGE_TYPES = {
  default: DefaultEdge,
};

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: "square",
    position: { x: 200, y: 400 },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: "circle",
    position: { x: 1000, y: 400 },
    data: {},
  },
] satisfies Node[];

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges));
  }, []);

  function addSquareNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "square",
        position: { x: 750, y: 350 },
        data: {},
      },
    ]);
  }
  function addCircleNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "circle",
        position: { x: 750, y: 350 },
        data: {},
      },
    ]);
  }

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edgeTypes={EDGE_TYPES}
        edges={edges}
        onEdgesChange={onEdgesChange}
        defaultEdgeOptions={{ type: "default" }}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>

      <Toolbar.Root className="fixed gap-12 flex bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
        {/*33:50*/}
        <Toolbar.Button
          onClick={addSquareNode}
          className="w-32 h-32 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-3"
        />
        <Toolbar.Button
          onClick={addCircleNode}
          className="w-32 h-32 bg-violet-500 mt-6 rounded-full transition-transform hover:-translate-y-3"
        />
      </Toolbar.Root>
    </div>
  );
}

export default App;
