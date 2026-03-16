import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  route("login", "routes/login.tsx"),

  layout("./layouts/adminLayout.tsx", [
    index("routes/dashboard.tsx"),
    ...prefix("category-management", [
      route("category", "routes/category.tsx"),
      route("sub-category", "routes/subCategory.tsx"),
    ]),
    ...prefix("service-management", [
      route("services-list", "routes/servicesList.tsx"),
      route("add-service", "routes/addService.tsx"),
    ]),
    ...prefix("booking-management", [
      route("booking-list", "routes/bookingList.tsx"),
    ]),
    ...prefix("providers-management", [
      route("active-providers", "routes/activeProviders.tsx"),
      route("pending-providers", "routes/pendingProviders.tsx"),
      route("provider-services", "routes/providerServices.tsx"),
      route("provider-earnings", "routes/providerEarnings.tsx"),
      route("providers-performance", "routes/providersPerformance.tsx"),
    ]),
    ...prefix("payout", [
      route("payout-history", "routes/payoutHistory.tsx"),
      route("new-payout", "routes/newPayout.tsx"),
    ]),
    ...prefix("customer-management", [
      route("customer-list", "routes/customerList.tsx"),
      route("customer-ratings", "routes/customerRatings.tsx"),
      route("payments-list", "routes/paymentsList.tsx"),
    ]),
    ...prefix("system-users", [
      route("users-list", "routes/usersList.tsx"),
      route("new-user", "routes/newUser.tsx"),
    ]),
    ...prefix("points-management", [
      route("points-configuration", "routes/pointsConfiguration.tsx"),
      route("points-overview", "routes/pointsOverview.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
