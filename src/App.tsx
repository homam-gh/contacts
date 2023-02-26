import Layout from "./components/Layout";
import ErrorBoundary from "./shared/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Layout />;
    </ErrorBoundary>
  );
}

export default App;
