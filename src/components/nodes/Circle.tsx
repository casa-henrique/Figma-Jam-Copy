import "@reactflow/node-resizer/dist/style.css";
import { Handle, NodeProps, NodeResizer, Position } from "reactflow";

export function Circle({ selected }: NodeProps) {
  return (
    <div className="bg-violet-500 w-full h-full rounded-full min-w-[200px] min-h-[200px]">
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 border-2 border-white rounded bg-blue-400"
      />
      <Handle
        className="-right-5 w-3 h-3 bg-blue-400/90"
        id="right"
        type="source"
        position={Position.Right}
      />
      <Handle
        className="-left-5 w-3 h-3 bg-blue-400/90"
        id="left"
        type="source"
        position={Position.Left}
      />
      <Handle
        className="-top-5 w-3 h-3 bg-blue-400/90"
        id="top"
        type="source"
        position={Position.Top}
      />
      <Handle
        className="-bottom-5 w-3 h-3 bg-blue-400/90"
        id="bottom"
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}
