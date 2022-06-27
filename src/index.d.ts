declare namespace CMS {

  interface PostCartInput {
    name: string;
    title: string;
  }

  interface ShopifyResponse {
    callbackUrl: string
  }

  interface Item {
    title: string;
    itemId: string;
  }

}
