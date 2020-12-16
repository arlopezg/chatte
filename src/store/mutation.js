import { requiredParam } from "@/utils";

/**
 * @method mutate
 * @description Generic VueX mutation
 * @param {Object} state Current VueX module state
 * @param {Object} mutation Mutation object. Must include `prop` and `value` attributes
 */
const mutate = (
  state = requiredParam("mutation state"),
  mutation = requiredParam("mutation property object")
) => {
  state[mutation.prop] = mutation.value;
};

export default mutate;
