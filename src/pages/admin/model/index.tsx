import Link from "next/link";
import React from "react";
import PanelLayout from "../../../layouts/panel";
import { trpc } from "../../../utils/trpc";

function Index() {
  return (
    <PanelLayout>
      <div>Models</div>
      <div className="flex">
      <Link className="" href={"/admin/manufacturer"}>

        <a className="btn-primary">Manufacturer</a>
      </Link>
      </div>
    </PanelLayout>
  );
}

export default Index;
