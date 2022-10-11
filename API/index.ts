import schema from "./schema";
import query from "./query";
import mutation from "./mutation";

const resolver = {
    ...query, ...mutation
}
export {schema}; 
export {resolver};