import AppLayout from "../Layouts/AppLayout";

const Discovery = ({ state }) => {
  return (
    <AppLayout state={state}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          Discovery
        </h1>
      </div>
    </AppLayout>
  );
};

export default Discovery;
