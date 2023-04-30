import { Client, buildClient } from "@datocms/cma-client-browser";

class DatoCMSClientConfig {
  private static instance: DatoCMSClientConfig;
  private client: Client | null = null;

  private constructor() {}

  public static getInstance(apiToken: string): DatoCMSClientConfig {
    if (!DatoCMSClientConfig.instance) {
      DatoCMSClientConfig.instance = new DatoCMSClientConfig();
      DatoCMSClientConfig.instance.client = buildClient({
        apiToken,
      });
    }

    return DatoCMSClientConfig.instance;
  }

  public getClient(): Client {
    return this.client!!;
  }
}

export default DatoCMSClientConfig;
