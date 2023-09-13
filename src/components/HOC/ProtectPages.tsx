import React from "react";

function ProtectPages(OriginalPage: any) {
  function NewPage() {
    const message = "this from HOC";
    return <OriginalPage message={message} />;
  }
  return <NewPage />;
}

export default ProtectPages;
