export default function AdminPage() {
  return (
   <main className="min-h-screen bg-neutral-50 p-8">
{/* Dashboard Header */}
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">

          <h1 className="text-5xl">
            NOST Dashboard
          </h1>

          <p className="mt-3 text-neutral-500">
            Internal Analytics
          </p>
          
          {/* KPI Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">

  <div className="bg-white p-6 border">
    <p className="text-sm text-neutral-500">
      Revenue
    </p>

    <h2 className="text-3xl mt-2">
      $48,920
    </h2>
  </div>

  <div className="bg-white p-6 border">
    <p className="text-sm text-neutral-500">
      Orders
    </p>

    <h2 className="text-3xl mt-2">
      387
    </h2>
  </div>

  <div className="bg-white p-6 border">
    <p className="text-sm text-neutral-500">
      Customers
    </p>

    <h2 className="text-3xl mt-2">
      1,284
    </h2>
  </div>

  <div className="bg-white p-6 border">
    <p className="text-sm text-neutral-500">
      Conversion Rate
    </p>

    <h2 className="text-3xl mt-2">
      4.7%
    </h2>
  </div>

</div>
{/* grafica */}
<div className="grid lg:grid-cols-3 gap-6 mt-12">

  <div className="lg:col-span-2 bg-white border p-8">

    <div className="flex justify-between items-center mb-8">

      <h2 className="text-2xl">
        Revenue Trend
      </h2>

      <span className="text-green-600">
        +18%
      </span>

    </div>

    <div className="h-72 flex items-end gap-4">

      <div className="flex-1 bg-black h-24"></div>
      <div className="flex-1 bg-black h-32"></div>
      <div className="flex-1 bg-black h-40"></div>
      <div className="flex-1 bg-black h-52"></div>
      <div className="flex-1 bg-black h-48"></div>
      <div className="flex-1 bg-black h-64"></div>

    </div>

    <div className="flex justify-between mt-4 text-sm text-neutral-500">

      <span>Jan</span>
      <span>Feb</span>
      <span>Mar</span>
      <span>Apr</span>
      <span>May</span>
      <span>Jun</span>

    </div>

  </div>

  <div className="bg-white border p-8">

    <h2 className="text-2xl mb-8">
      Top Products
    </h2>

    <div className="space-y-6">

      <div>
        <p>Oversized Hoodie</p>
        <span className="text-neutral-500">
          $12,400 Revenue
        </span>
      </div>

      <div>
        <p>Designer Jacket</p>
        <span className="text-neutral-500">
          $9,800 Revenue
        </span>
      </div>

      <div>
        <p>Cargo Pants</p>
        <span className="text-neutral-500">
          $7,200 Revenue
        </span>
      </div>

      <div>
        <p>Essential Tee</p>
        <span className="text-neutral-500">
          $5,400 Revenue
        </span>
      </div>

    </div>

  </div>

</div>

 {/* Recent Orders */}
        </div>
        <div className="bg-white border mt-12">
            

  <div className="p-6 border-b">

    <h2 className="text-2xl">
      Recent Orders
    </h2>

  </div>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead>

        <tr className="border-b">

          <th className="text-left p-4">
            Order
          </th>

          <th className="text-left p-4">
            Customer
          </th>

          <th className="text-left p-4">
            Status
          </th>

          <th className="text-left p-4">
            Total
          </th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-b">

          <td className="p-4">
            #NOST-1024
          </td>

          <td className="p-4">
            John Smith
          </td>

          <td className="p-4">
            Paid
          </td>

          <td className="p-4">
            $349
          </td>

        </tr>

        <tr className="border-b">

          <td className="p-4">
            #NOST-1025
          </td>

          <td className="p-4">
            Sarah Lee
          </td>

          <td className="p-4">
            Paid
          </td>

          <td className="p-4">
            $199
          </td>

        </tr>

        <tr>

          <td className="p-4">
            #NOST-1026
          </td>

          <td className="p-4">
            Michael Brown
          </td>

          <td className="p-4">
            Processing
          </td>

          <td className="p-4">
            $278
          </td>

        </tr>

      </tbody>

    </table>

  </div>

</div>
{/*activity feed*/}
<div className="grid lg:grid-cols-3 gap-6 mt-12">

  <div className="lg:col-span-2 bg-white border p-8">

    <h2 className="text-2xl mb-8">
      Store Insights
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div>
        <p className="text-neutral-500">
          Avg Order Value
        </p>

        <h3 className="text-3xl mt-2">
          $126
        </h3>
      </div>

      <div>
        <p className="text-neutral-500">
          Returning Customers
        </p>

        <h3 className="text-3xl mt-2">
          38%
        </h3>
      </div>

      <div>
        <p className="text-neutral-500">
          Products Sold
        </p>

        <h3 className="text-3xl mt-2">
          1,842
        </h3>
      </div>

    </div>

  </div>

  <div className="bg-white border p-8">

    <h2 className="text-2xl mb-8">
      Activity
    </h2>

    <div className="space-y-6">

      <div>
        <p>New Order #1027</p>
        <span className="text-neutral-500">
          2 min ago
        </span>
      </div>

      <div>
        <p>Payment Received</p>
        <span className="text-neutral-500">
          18 min ago
        </span>
      </div>

      <div>
        <p>New Customer</p>
        <span className="text-neutral-500">
          42 min ago
        </span>
      </div>

      <div>
        <p>Inventory Updated</p>
        <span className="text-neutral-500">
          1 hour ago
        </span>
      </div>

    </div>

  </div>

</div>

      </div>

    </main>
  );
}

