import apiClient from "./api-client";
import userService from "./user-service";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get(this.endpoint, {
      signal: controller.signal,
    });
    return { cancel: () => controller.abort(), request };
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  insert<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T>(id: number, entity: T) {
    return apiClient.patch(this.endpoint + "/" + id, entity);
  }
}

const create = (endpoint:string) => new HttpService(endpoint);

export default create;
