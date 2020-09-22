/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserType = "CREATOR" | "VIEWER" | "%future added value";
export type ProfileQueryVariables = {
    id: string;
};
export type ProfileQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly displayName: string;
        readonly bio: string | null;
        readonly type: UserType;
        readonly postsCount: number;
        readonly subscribersCount: number;
        readonly isCurrentlySubscribed: boolean;
        readonly pinnedPost: {
            readonly " $fragmentRefs": FragmentRefs<"Post_post">;
        } | null;
        readonly posts: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Post_post">;
        }>;
        readonly " $fragmentRefs": FragmentRefs<"PostUser_user">;
    };
};
export type ProfileQuery = {
    readonly response: ProfileQueryResponse;
    readonly variables: ProfileQueryVariables;
};



/*
query ProfileQuery(
  $id: ID!
) {
  user(id: $id) {
    id
    displayName
    bio
    type
    postsCount
    subscribersCount
    isCurrentlySubscribed
    ...PostUser_user
    pinnedPost {
      ...Post_post
      id
    }
    posts {
      ...Post_post
      id
    }
  }
}

fragment PostUser_user on User {
  id
  displayName
}

fragment Post_post on Post {
  id
  title
  text
  visibility
  favoritesCount
  hasFavorited
  media {
    url
    type
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "postsCount",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subscribersCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isCurrentlySubscribed",
  "storageKey": null
},
v9 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "Post_post"
  }
],
v10 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "text",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "visibility",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "favoritesCount",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hasFavorited",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PostMedia",
    "kind": "LinkedField",
    "name": "media",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
      },
      (v5/*: any*/),
      (v2/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "pinnedPost",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "posts",
            "plural": true,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PostUser_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "pinnedPost",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "posts",
            "plural": true,
            "selections": (v10/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "81d04e885c3bb987278191dd18a9eb87",
    "id": null,
    "metadata": {},
    "name": "ProfileQuery",
    "operationKind": "query",
    "text": "query ProfileQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    displayName\n    bio\n    type\n    postsCount\n    subscribersCount\n    isCurrentlySubscribed\n    ...PostUser_user\n    pinnedPost {\n      ...Post_post\n      id\n    }\n    posts {\n      ...Post_post\n      id\n    }\n  }\n}\n\nfragment PostUser_user on User {\n  id\n  displayName\n}\n\nfragment Post_post on Post {\n  id\n  title\n  text\n  visibility\n  favoritesCount\n  hasFavorited\n  media {\n    url\n    type\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7a06908080eba7a4ef3275b0eb4a9b59';
export default node;