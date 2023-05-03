import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Media from './collections/Media';
import Lacteos from './collections/Lacteos';
import Refrigerados from './collections/Refrigerados';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Lacteos,
    Media,
    Refrigerados
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
