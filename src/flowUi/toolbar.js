// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className='toolbar-container'>
            <h4>Pipeline Nodes</h4>
            <div className='draggable-nodes'>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='wait' label='Wait' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='semanticSearch' label='Semantic Search' />
            </div>
        </div>
    );
};
