import { Component } from "@angular/core"

@Component({
  selector: "app-examples",
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Navigation Bar -->
      <nav class="border-b border-gray-200 bg-white shadow-lg">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <h1 class="text-xl font-bold text-gray-900">CRUD Catalog</h1>
              </div>
              <div class="ml-10 hidden md:block">
                <div class="flex items-baseline space-x-4">
                  <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >Users</a
                  >
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >Products</a
                  >
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >Orders</a
                  >
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <button class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                + New Item
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Page Header -->
      <div class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-3xl font-bold text-gray-900">Component Catalog</h2>
              <p class="mt-1 text-sm text-gray-500">A collection of reusable CRUD components</p>
            </div>
            <div class="flex space-x-3">
              <button class="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                Export
              </button>
              <button class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Import
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Search and Filters Section -->
        <div class="mb-6 rounded-lg bg-white p-6 shadow">
          <h3 class="mb-4 text-lg font-medium text-gray-900">Search & Filters</h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">Search</label>
              <input
                type="text"
                placeholder="Search items..."
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">Category</label>
              <select
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
              </select>
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">Status</label>
              <select
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
            </div>
            <div class="mb-[5px] flex items-end">
              <button class="w-full rounded-md bg-gray-600 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Section -->
        <div class="mb-6 overflow-hidden rounded-lg bg-white shadow">
          <div class="border-b border-gray-200 px-6 py-4">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900">Data Table</h3>
              <div class="flex space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Email</th>
                  <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <div
                          class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                          JD
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">John Doe</div>
                        <div class="text-sm text-gray-500">{{ "john@example.com" }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-900">{{ "john@example.com" }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="flex space-x-2">
                      <button class="text-blue-600 hover:text-blue-900">Edit</button>
                      <button class="text-red-600 hover:text-red-900">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <div
                          class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white">
                          JS
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">Jane Smith</div>
                        <div class="text-sm text-gray-500">{{ "jane@example.com" }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-900">{{ "jane@example.com" }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="inline-flex rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <div class="flex space-x-2">
                      <button class="text-blue-600 hover:text-blue-900">Edit</button>
                      <button class="text-red-600 hover:text-red-900">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div class="flex flex-1 justify-between sm:hidden">
              <button
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of
                  <span class="font-medium">97</span> results
                </p>
              </div>
              <div>
                <nav class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm">
                  <button
                    class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                  <button
                    class="relative inline-flex items-center border border-blue-500 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                    1
                  </button>
                  <button
                    class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    2
                  </button>
                  <button
                    class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    3
                  </button>
                  <button
                    class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Next</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Components Section -->
        <div class="mb-6 rounded-lg bg-white p-6 shadow">
          <h3 class="mb-4 text-lg font-medium text-gray-900">Form Components</h3>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <!-- Create/Edit Form -->
            <div class="space-y-4">
              <h4 class="text-md font-medium text-gray-700">Create/Edit Form</h4>
              <form class="space-y-4">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">Department</label>
                  <select
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option>Select department</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>HR</option>
                  </select>
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">Status</label>
                  <div class="flex space-x-4">
                    <label class="flex items-center">
                      <input type="radio" name="status" value="active" class="text-blue-600 focus:ring-blue-500" />
                      <span class="ml-2 text-sm text-gray-700">Active</span>
                    </label>
                    <label class="flex items-center">
                      <input type="radio" name="status" value="inactive" class="text-blue-600 focus:ring-blue-500" />
                      <span class="ml-2 text-sm text-gray-700">Inactive</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">Notes</label>
                  <textarea
                    rows="3"
                    placeholder="Enter notes"
                    class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                </div>
                <div class="flex space-x-3">
                  <button
                    type="submit"
                    class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Save
                  </button>
                  <button
                    type="button"
                    class="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400">
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            <!-- Card Components -->
            <div class="space-y-4">
              <h4 class="text-md font-medium text-gray-700">Card Components</h4>

              <!-- User Card -->
              <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div class="flex items-center space-x-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-medium text-gray-900">John Doe</p>
                    <p class="truncate text-sm text-gray-500">{{ "john@example.com" }}</p>
                  </div>
                  <div class="flex space-x-2">
                    <button class="text-sm text-blue-600 hover:text-blue-900">Edit</button>
                    <button class="text-sm text-red-600 hover:text-red-900">Delete</button>
                  </div>
                </div>
              </div>

              <!-- Stats Card -->
              <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500">
                      <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="truncate text-sm font-medium text-gray-500">Total Users</dt>
                      <dd class="text-lg font-medium text-gray-900">1,234</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <!-- Alert Components -->
              <div class="space-y-3">
                <div class="rounded-md border border-green-200 bg-green-50 p-4">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-green-800">Success! User created successfully.</p>
                    </div>
                  </div>
                </div>

                <div class="rounded-md border border-red-200 bg-red-50 p-4">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-red-800">Error! Failed to create user.</p>
                    </div>
                  </div>
                </div>

                <div class="rounded-md border border-yellow-200 bg-yellow-50 p-4">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-yellow-800">Warning! Please review your input.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Button Components -->
        <div class="mb-6 rounded-lg bg-white p-6 shadow">
          <h3 class="mb-4 text-lg font-medium text-gray-900">Button Components</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 class="text-md mb-3 font-medium text-gray-700">Primary Actions</h4>
              <div class="flex flex-wrap gap-3">
                <button class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Primary Button
                </button>
                <button class="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
                  Success Button
                </button>
                <button class="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                  Danger Button
                </button>
                <button class="rounded-md bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700">
                  Warning Button
                </button>
              </div>
            </div>
            <div>
              <h4 class="text-md mb-3 font-medium text-gray-700">Secondary Actions</h4>
              <div class="flex flex-wrap gap-3">
                <button class="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400">
                  Secondary Button
                </button>
                <button
                  class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Outline Button
                </button>
                <button class="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-900">Text Button</button>
                <button
                  class="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                  disabled>
                  Disabled Button
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading States -->
        <div class="mb-6 rounded-lg bg-white p-6 shadow">
          <h3 class="mb-4 text-lg font-medium text-gray-900">Loading States</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="text-center">
              <div
                class="inline-flex cursor-not-allowed items-center rounded-md bg-blue-500 px-4 py-2 text-sm leading-6 font-semibold text-white shadow transition duration-150 ease-in-out hover:bg-blue-400">
                <svg
                  class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </div>
            </div>
            <div class="text-center">
              <div
                class="inline-flex cursor-not-allowed items-center rounded-md bg-green-500 px-4 py-2 text-sm leading-6 font-semibold text-white shadow transition duration-150 ease-in-out hover:bg-green-400">
                <svg
                  class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </div>
            </div>
            <div class="text-center">
              <div
                class="inline-flex cursor-not-allowed items-center rounded-md bg-red-500 px-4 py-2 text-sm leading-6 font-semibold text-white shadow transition duration-150 ease-in-out hover:bg-red-400">
                <svg
                  class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Deleting...
              </div>
            </div>
          </div>
        </div>

        <!-- Empty States -->
        <div class="mb-6 rounded-lg bg-white p-6 shadow">
          <h3 class="mb-4 text-lg font-medium text-gray-900">Empty States</h3>
          <div class="py-12 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No items found</h3>
            <p class="mt-1 text-sm text-gray-500">Get started by creating a new item.</p>
            <div class="mt-6">
              <button
                class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                <svg class="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ExamplesComponent {}
