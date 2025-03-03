import { Helmet } from "@modern-js/runtime/head";
import { useModel } from "@modern-js/runtime/model";
import { List } from "antd";
import Item from "../components/Item";
import contacts from "../models/contacts";

function Contacts({
  title,
  source,
}: {
  title: string;
  source: "items" | "archived";
}) {
  const [state, { archive }] = useModel(contacts);

  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <List
        dataSource={state[source]}
        renderItem={(info) => (
          <Item
            key={info.name}
            info={info}
            onArchive={() => {
              console.log(info, "--------");
              archive(info.email);
            }}
          />
        )}
      />
    </div>
  );
}

export default Contacts;
