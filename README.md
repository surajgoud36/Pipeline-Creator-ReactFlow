# React Flow Pipeline Builder

A basic starter project for building visual pipelines using the React Flow library. This application allows users to create complex data processing pipelines by connecting various node types with edges, and validate that the configuration forms a valid Directed Acyclic Graph (DAG) using a backend Python FastAPI service.

## Features

- **Node-based UI**: Drag-and-drop interface to create pipeline workflows
- **Multiple Node Types**: Supports various specialized nodes for different operations
- **Edge Connections**: Connect nodes to define data flow relationships
- **DAG Validation**: Validate pipeline configuration against DAG constraints via backend API
- **Interactive Toolbar**: Easy-to-use controls for managing pipeline elements
- **Result Display**: View validation results in a modal with detailed feedback

## Tech Stack

- **Frontend Framework**: React 18.2
- **Flow Library**: ReactFlow 11.11.4
- **State Management**: Zustand
- **Build Tool**: React Scripts with Create React App
- **CSS**: Modern CSS with custom styling

## Available Node Types

The pipeline builder includes the following pre-configured nodes:

- **Input Node** - Entry point for data into the pipeline
- **Output Node** - Final destination for processed data
- **Text Node** - Text processing and transformation
- **LLM Node** - Large Language Model integration
- **API Node** - External API call operations
- **Image Node** - Image processing operations
- **Semantic Search Node** - Semantic search functionality
- **Note Node** - Annotation and documentation
- **Wait Node** - Delay or waiting conditions

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The application will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode with hot reload.

### `npm build`
Creates an optimized production build in the `build` folder.

### `npm test`
Launches the interactive test runner.

### `npm run eject`
Ejects from Create React App configuration (one-way operation).

## Project Structure

```
src/
├── App.js                           # Main application entry point
├── App.css                          # Global styles
├── index.js                         # React DOM root
├── components/                      # Reusable components
│   ├── baseNode.js                 # Base node configuration
│   ├── edges/
│   │   └── customEdge.js           # Custom edge styling
│   ├── handles/
│   │   └── customHandle.js         # Custom connection handles
│   ├── nodefields/                 # Node field renderers
│   │   ├── nodeFieldRenderer.js
│   │   ├── nodeOutputField.js
│   │   ├── nodeSelectField.js
│   │   ├── nodeTextArea.js
│   │   └── nodeTextField.js
│   └── nodes/                      # Node type definitions
│       ├── apiNode.js
│       ├── imageNode.js
│       ├── inputNode.js
│       ├── llmNode.js
│       ├── noteNode.js
│       ├── outputNode.js
│       ├── semanticSearchNode.js
│       ├── textNode.js
│       └── waitNode.js
├── flowUi/                          # Flow UI components
│   ├── flowCanvas.js               # Main canvas component
│   ├── toolbar.js                  # Pipeline toolbar
│   └── draggableNode.js            # Node dragging functionality
├── submitFeature/                   # Pipeline submission
│   ├── submitButton.js             # Submit trigger
│   └── resultModal.js              # Results display
└── zustandStore/
    └── store.js                     # State management store
```

## How It Works

### Creating a Pipeline

1. **Add Nodes**: Use the toolbar to add different node types to the canvas
2. **Connect Nodes**: Click and drag from one node's output handle to another node's input handle
3. **Configure Nodes**: Edit node properties using the available input fields
4. **Submit & Validate**: Click the Submit button to validate the pipeline configuration

### DAG Validation

When you submit a pipeline, the application sends the node and edge configuration to the backend FastAPI service, which:

1. Receives the pipeline structure (nodes and edges)
2. Analyzes the graph structure
3. Validates that it forms a valid DAG (no cycles)
4. Returns validation results

Results are displayed in a modal window showing the validation outcome.

## Backend Integration

The frontend communicates with a FastAPI backend service for pipeline validation:

- **Endpoint**: `https://fastapi-backend-sm7b.onrender.com/pipelines/parse`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "nodes": [
      { "id": "node-1" },
      { "id": "node-2" }
    ],
    "edges": [
      { "source": "node-1", "target": "node-2" }
    ]
  }
  ```

## State Management

This project uses **Zustand** for state management. The store manages:

- **Nodes**: Array of all nodes in the pipeline
- **Edges**: Array of all connections between nodes
- **Node Updates**: Add, remove, and modify nodes
- **Edge Updates**: Create and remove connections

The store is centralized in [zustandStore/store.js](zustandStore/store.js) and can be accessed throughout the application.

## Customization

### Adding New Node Types

1. Create a new file in `components/nodes/` (e.g., `newNode.js`)
2. Define the node configuration and UI
3. Register it in the toolbar
4. Add corresponding field renderers if needed

### Styling

Global styles are in [index.css](src/index.css). Individual component styles can be added as needed.

## Deployment

To build for production:

```bash
npm run build
```

This creates an optimized build ready for deployment to any static hosting service.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the MIT License.

## Learn More

- [React Documentation](https://reactjs.org/)
- [ReactFlow Documentation](https://reactflow.dev/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Create React App Documentation](https://create-react-app.dev/)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
