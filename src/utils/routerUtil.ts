import { ILoadGuardsGuardsProps } from '@/interface/utils/routerUtil'
import { IBootstrapProps } from '@/interface/bootstrap';


/**
 * 加载导航守卫
 * @param guards
 * @param options
 */
function loadGuards(guards: ILoadGuardsGuardsProps, options: IBootstrapProps) {
  const { beforeEach, afterEach } = guards;
  const { router, store } = options
  beforeEach.forEach((guard) => {
    if (guard && typeof guard === "function") {
      router.beforeEach(async (to, from, next) => guard(to, from, next, options));
    }
  });
  afterEach.forEach((guard) => {
    if (guard && typeof guard === "function") {
      router.afterEach(async () => guard(store));
    }
  });
}

export {
  loadGuards
}