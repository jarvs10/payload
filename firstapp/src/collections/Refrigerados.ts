import { CollectionConfig } from "payload/types";

const Regrigerados: CollectionConfig = {
  slug: "refrigerados",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "quantity",
      type: "number",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Regrigerados;
