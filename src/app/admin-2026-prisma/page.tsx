const kpis = [
  {
    label: "Revenue",
    value: "$48,920",
    change: "+18%",
  },
  {
    label: "Orders",
    value: "387",
    change: "+12%",
  },
  {
    label: "Customers",
    value: "1,284",
    change: "+24%",
  },
  {
    label: "Conversion Rate",
    value: "4.7%",
    change: "+0.8%",
  },
];

const topProducts = [
  {
    name: "Oversized Hoodie",
    revenue: "$12,400 Revenue",
  },
  {
    name: "Designer Jacket",
    revenue: "$9,800 Revenue",
  },
  {
    name: "Cargo Pants",
    revenue: "$7,200 Revenue",
  },
  {
    name: "Essential Tee",
    revenue: "$5,400 Revenue",
  },
];

const orders = [
  {
    order: "#NOST-1024",
    customer: "John Smith",
    status: "Paid",
    total: "$349",
  },
  {
    order: "#NOST-1025",
    customer: "Sarah Lee",
    status: "Paid",
    total: "$199",
  },
  {
    order: "#NOST-1026",
    customer: "Michael Brown",
    status: "Processing",
    total: "$278",
  },
];

const activity = [
  {
    title: "New Order #1027",
    time: "2 min ago",
  },
  {
    title: "Payment Received",
    time: "18 min ago",
  },
  {
    title: "New Customer",
    time: "42 min ago",
  },
  {
    title: "Inventory Updated",
    time: "1 hour ago",
  },
];

const chartBars = [
  "h-24",
  "h-32",
  "h-40",
  "h-52",
  "h-48",
  "h-64",
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950">

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Admin Header */}

        <header className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
              NOST Admin
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Live Store Analytics
          </div>

        </header>

        {/* KPI Cards */}

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {kpis.map((item) => (
            <div
              key={item.label}
              className="border border-black/10 bg-white p-6"
            >
              <p className="text-sm text-neutral-500">
                {item.label}
              </p>

              <div className="mt-4 flex items-end justify-between gap-4">

                <h2 className="text-3xl">
                  {item.value}
                </h2>

                <span className="text-sm text-green-400">
                  {item.change}
                </span>

              </div>
            </div>
          ))}

        </section>

        {/* Chart + Top Products */}

        <section className="mt-8 grid gap-6 lg:grid-cols-3">

          <div className="border border-black/10 bg-white p-6 lg:col-span-2">

            <div className="mb-8 flex items-center justify-between">

              <div>
                <h2 className="text-2xl">
                  Revenue Trend
                </h2>

                <p className="mt-1 text-sm text-neutral-400">
                  Last 6 months performance
                </p>
              </div>

              <span className="text-green-400">
                +18%
              </span>

            </div>

            <div className="flex h-72 items-end gap-3 md:gap-5">

              {chartBars.map((height, index) => (
                <div
                  key={index}
                  className={`flex-1 bg-black ${height}`}
                />
              ))}

            </div>

            <div className="mt-4 flex justify-between text-xs text-neutral-400">

              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>

            </div>

          </div>

          <div className="border border-black/10 bg-white p-6">

            <h2 className="text-2xl">
              Top Products
            </h2>

            <div className="mt-8 space-y-6">

              {topProducts.map((product) => (
                <div
                  key={product.name}
                  className="border-b border-black/10 pb-5 last:border-0 last:pb-0"
                >
                  <p>{product.name}</p>

                  <span className="mt-1 block text-sm text-neutral-400">
                    {product.revenue}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Orders + Activity */}

        <section className="mt-8 grid gap-6 lg:grid-cols-3">

          <div className="border border-black/10 bg-white lg:col-span-2 overflow-hidden">

            <div className="border-b border-black/10 p-6">

              <h2 className="text-2xl">
                Recent Orders
              </h2>

            </div>

            <div className="w-full overflow-x-auto">

  <table className="min-w-[720px] w-full">

                <thead>

                  <tr className="border-b border-black/10 text-left text-sm text-neutral-400">

                    <th className="p-4">
                      Order
                    </th>

                    <th className="p-4">
                      Customer
                    </th>

                    <th className="p-4">
                      Status
                    </th>

                    <th className="p-4">
                      Total
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {orders.map((order) => (
                    <tr
                      key={order.order}
                      className="border-b border-black/10 last:border-0"
                    >
                      <td className="p-4">
                        {order.order}
                      </td>

                      <td className="p-4 text-neutral-700">
                        {order.customer}
                      </td>

                      <td className="p-4">
                        <span
                          className={`
                            inline-flex
                            rounded-full
                            px-3
                            py-1
                            text-xs
                            ${
                              order.status === "Paid"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-yellow-500/10 text-yellow-300"
                            }
                          `}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="p-4">
                        {order.total}
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

          <div className="border border-black/10 bg-white p-6">

            <h2 className="text-2xl">
              Activity
            </h2>

            <div className="mt-8 space-y-6">

              {activity.map((item) => (
                <div key={item.title}>

                  <p>{item.title}</p>

                  <span className="mt-1 block text-sm text-neutral-400">
                    {item.time}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Store Insights */}

        <section className="mt-8 border border-black/10 bg-white p-6">

          <h2 className="text-2xl">
            Store Insights
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div>
              <p className="text-neutral-400">
                Avg Order Value
              </p>

              <h3 className="mt-2 text-3xl">
                $126
              </h3>
            </div>

            <div>
              <p className="text-neutral-400">
                Returning Customers
              </p>

              <h3 className="mt-2 text-3xl">
                38%
              </h3>
            </div>

            <div>
              <p className="text-neutral-400">
                Products Sold
              </p>

              <h3 className="mt-2 text-3xl">
                1,842
              </h3>
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}