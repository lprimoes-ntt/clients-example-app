import { JsonPipe } from "@angular/common"
import { Component, computed, effect, inject, signal } from "@angular/core"
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"

/**
 * Signals Component - Angular Signals Examples
 *
 * This component demonstrates various Angular Signals patterns and use cases:
 * - Basic signal creation and manipulation
 * - Computed signals for derived state
 * - Object and array signals with immutable updates
 * - Effects for side effects and logging
 * - Signal updates and tracking
 * - Integration with Reactive Forms
 * - Form validation with signals
 * - Real-time form state monitoring
 */
@Component({
  selector: "app-signals",
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <div class="mx-auto max-w-4xl p-5 font-sans">
      <h2 class="mb-8 text-center text-3xl font-bold text-gray-800">Angular Signals Examples</h2>

      <!-- Basic Signal Example - Demonstrates fundamental signal operations -->
      <div class="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h3 class="mt-0 mb-4 border-b-2 border-blue-500 pb-2 text-xl font-semibold text-gray-700">1. Basic Signal</h3>
        <p class="mb-4">Count: {{ count() }}</p>
        <!-- Signal update methods - shows different ways to modify signals -->
        <button
          (click)="increment()"
          class="m-1 cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Increment
        </button>
        <button
          (click)="decrement()"
          class="m-1 cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Decrement
        </button>
        <button
          (click)="reset()"
          class="m-1 cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Reset
        </button>
      </div>

      <!-- Computed Signal Example - Shows derived state from other signals -->
      <div class="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h3 class="mt-0 mb-4 border-b-2 border-blue-500 pb-2 text-xl font-semibold text-gray-700">
          2. Computed Signal
        </h3>
        <!-- Computed values that automatically update when dependencies change -->
        <p class="mb-2">Double Count: {{ doubleCount() }}</p>
        <p class="mb-2">Count Status: {{ countStatus() }}</p>
      </div>

      <!-- Object Signal Example - Demonstrates complex object state management -->
      <div class="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h3 class="mt-0 mb-4 border-b-2 border-blue-500 pb-2 text-xl font-semibold text-gray-700">3. Object Signal</h3>
        <!-- Form inputs that update object signal properties -->
        <div>
          <label class="my-2 block"
            >Name:
            <input
              [value]="user().name"
              (input)="updateUserName($event)"
              class="m-1 rounded border border-gray-300 p-2"
          /></label>
        </div>
        <div>
          <label class="my-2 block"
            >Age:
            <input
              type="number"
              [value]="user().age"
              (input)="updateUserAge($event)"
              class="m-1 rounded border border-gray-300 p-2"
          /></label>
        </div>
        <!-- Display object signal values -->
        <p class="mb-2">User Info: {{ user().name }}, {{ user().age }} years old</p>
        <!-- Computed signal based on object properties -->
        <p class="mb-2">Is Adult: {{ isAdult() ? "Yes" : "No" }}</p>
      </div>

      <!-- Array Signal Example - Shows array manipulation with signals -->
      <div class="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h3 class="mt-0 mb-4 border-b-2 border-blue-500 pb-2 text-xl font-semibold text-gray-700">4. Array Signal</h3>
        <!-- Add new items to array signal -->
        <div class="mb-4">
          <input #newItem placeholder="Add new item" class="m-1 rounded border border-gray-300 p-2" />
          <button
            (click)="addItem(newItem.value); newItem.value = ''"
            class="m-1 cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Add Item
          </button>
        </div>
        <!-- Display array items with remove functionality -->
        <ul class="list-none p-0">
          @for (item of items(); track $index) {
            <li class="my-1 flex items-center justify-between rounded border border-gray-300 bg-white px-3 py-2">
              {{ item }}
              <button
                (click)="removeItem($index)"
                class="cursor-pointer rounded border-none bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
                Remove
              </button>
            </li>
          }
        </ul>
        <!-- Computed signal for array length -->
        <p class="mt-4">Total Items: {{ itemCount() }}</p>
      </div>

      <!-- Signal Updates Example - Demonstrates update tracking and timestamps -->
      <div class="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h3 class="mt-0 mb-4 border-b-2 border-blue-500 pb-2 text-xl font-semibold text-gray-700">5. Signal Updates</h3>
        <!-- Display update counter and timestamp -->
        <p class="mb-2">Update Counter: {{ updateCounter() }}</p>
        <p class="mb-4">Last Update: {{ lastUpdate() }}</p>
        <button
          (click)="triggerUpdate()"
          class="m-1 cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Trigger Update
        </button>
      </div>

      <!-- Effect Example - Shows side effects and logging -->
      <div class="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h3 class="mt-0 mb-4 border-b-2 border-blue-500 pb-2 text-xl font-semibold text-gray-700">6. Effect Example</h3>
        <p class="mb-4">Check the console to see effect logs when signals change</p>
        <!-- Display effect logs in real-time -->
        <div class="mt-3 rounded bg-gray-200 p-3 font-mono">
          <strong>Effect Log:</strong>
          <div>{{ effectLog() }}</div>
        </div>
      </div>

      <!-- Reactive Forms with Signals Example - Advanced integration -->
      <div class="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h3 class="mt-0 mb-4 border-b-2 border-blue-500 pb-2 text-xl font-semibold text-gray-700">
          7. Reactive Forms with Signals
        </h3>

        <!-- Form with signal-based validation -->
        <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <!-- First Name field with signal-based validation display -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              First Name
              <input
                formControlName="firstName"
                type="text"
                class="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                [class.border-red-500]="firstNameInvalid()" />
            </label>
            @if (firstNameInvalid()) {
              <p class="mt-1 text-sm text-red-600">First name is required (min 2 characters)</p>
            }
          </div>

          <!-- Last Name field with signal-based validation display -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Last Name
              <input
                formControlName="lastName"
                type="text"
                class="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                [class.border-red-500]="lastNameInvalid()" />
            </label>
            @if (lastNameInvalid()) {
              <p class="mt-1 text-sm text-red-600">Last name is required (min 2 characters)</p>
            }
          </div>

          <!-- Email field with signal-based validation display -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Email
              <input
                formControlName="email"
                type="email"
                class="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                [class.border-red-500]="emailInvalid()" />
            </label>
            @if (emailInvalid()) {
              <p class="mt-1 text-sm text-red-600">Please enter a valid email address</p>
            }
          </div>

          <!-- Phone field with signal-based validation display -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Phone
              <input
                formControlName="phone"
                type="tel"
                class="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                [class.border-red-500]="phoneInvalid()" />
            </label>
            @if (phoneInvalid()) {
              <p class="mt-1 text-sm text-red-600">Phone number is required</p>
            }
          </div>

          <!-- Form action buttons with signal-based disabled state -->
          <div class="flex space-x-2">
            <button
              type="submit"
              [disabled]="formInvalid()"
              class="cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400">
              Submit Profile
            </button>
            <button
              type="button"
              (click)="resetForm()"
              class="cursor-pointer rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
              Reset
            </button>
            <button
              type="button"
              (click)="fillSampleData()"
              class="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Fill Sample Data
            </button>
          </div>
        </form>

        <!-- Form State Display - Real-time signal monitoring -->
        <div class="mt-6 space-y-2">
          <!-- Form state signals display -->
          <div class="rounded bg-blue-50 p-3">
            <h4 class="font-semibold text-blue-800">Form State (Signals):</h4>
            <p><strong>Form Valid:</strong> {{ formValid() ? "Yes" : "No" }}</p>
            <p><strong>Form Dirty:</strong> {{ formDirty() ? "Yes" : "No" }}</p>
            <p><strong>Form Touched:</strong> {{ formTouched() ? "Yes" : "No" }}</p>
            <p><strong>Submission Count:</strong> {{ submissionCount() }}</p>
          </div>

          <!-- Last submitted data display -->
          @if (formData()) {
            <div class="rounded bg-green-50 p-3">
              <h4 class="font-semibold text-green-800">Last Submitted Data:</h4>
              <pre class="mt-2 text-sm">{{ formData() | json }}</pre>
            </div>
          }

          <!-- Live form value monitoring -->
          <div class="rounded bg-gray-50 p-3">
            <h4 class="font-semibold text-gray-800">Current Form Value (Live):</h4>
            <pre class="mt-2 text-sm">{{ currentFormValue() | json }}</pre>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SignalsComponent {
  // Inject FormBuilder for reactive forms
  fb = inject(FormBuilder)

  // Basic signal - demonstrates simple state management
  count = signal(0)

  // Computed signals - show derived state that updates automatically
  doubleCount = computed(() => this.count() * 2)
  countStatus = computed(() => {
    const value = this.count()
    if (value === 0) return "Zero"
    if (value > 0) return "Positive"
    return "Negative"
  })

  // Object signal - demonstrates complex object state with immutable updates
  user = signal({ name: "John Doe", age: 25 })
  isAdult = computed(() => this.user().age >= 18)

  // Array signal - shows array manipulation with signals
  items = signal(["Apple", "Banana", "Orange"])
  itemCount = computed(() => this.items().length)

  // Update tracking signals - demonstrate signal update monitoring
  updateCounter = signal(0)
  lastUpdate = signal(new Date().toLocaleTimeString())

  // Effect log signal - stores effect execution logs
  effectLog = signal("Effect initialized")

  // Reactive Forms with Signals - advanced integration
  profileForm: FormGroup
  formData = signal<unknown>(null)
  submissionCount = signal(0)

  // Form state signals - real-time form monitoring
  formValid = signal(false)
  formInvalid = computed(() => !this.formValid())
  formDirty = signal(false)
  formTouched = signal(false)
  currentFormValue = signal<unknown>({})

  // Individual field validation signals - granular validation state
  firstNameInvalid = signal(false)
  lastNameInvalid = signal(false)
  emailInvalid = signal(false)
  phoneInvalid = signal(false)

  constructor() {
    // Initialize reactive form with validators
    this.profileForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
    })

    // Effect example - runs when signals change (side effects)
    effect(() => {
      const currentCount = this.count()
      const logMessage = `Count changed to: ${currentCount} at ${new Date().toLocaleTimeString()}`
      this.effectLog.set(logMessage)
    })

    // Another effect for user changes - demonstrates multiple effects
    effect(() => {
      const currentUser = this.user()
      console.log("User changed:", currentUser)
    })

    // Form state effects - sync form state with signals
    effect(() => {
      // Subscribe to form status changes and update signals
      this.profileForm.statusChanges.subscribe(status => {
        this.formValid.set(status === "VALID")
      })

      // Subscribe to form value changes and update signals
      this.profileForm.valueChanges.subscribe(value => {
        this.currentFormValue.set(value)
        this.formDirty.set(this.profileForm.dirty)
        this.formTouched.set(this.profileForm.touched)

        // Update individual field validation signals
        this.firstNameInvalid.set(
          (this.profileForm.get("firstName")?.invalid && this.profileForm.get("firstName")?.touched) || false,
        )
        this.lastNameInvalid.set(
          (this.profileForm.get("lastName")?.invalid && this.profileForm.get("lastName")?.touched) || false,
        )
        this.emailInvalid.set(
          (this.profileForm.get("email")?.invalid && this.profileForm.get("email")?.touched) || false,
        )
        this.phoneInvalid.set(
          (this.profileForm.get("phone")?.invalid && this.profileForm.get("phone")?.touched) || false,
        )
      })
    })
  }

  // Basic signal methods - demonstrate different update patterns
  increment() {
    this.count.update(value => value + 1)
  }

  decrement() {
    this.count.update(value => value - 1)
  }

  reset() {
    this.count.set(0)
  }

  // Object signal methods - show immutable object updates
  updateUserName(event: Event) {
    const target = event.target as HTMLInputElement
    this.user.update(user => ({ ...user, name: target.value }))
  }

  updateUserAge(event: Event) {
    const target = event.target as HTMLInputElement
    this.user.update(user => ({ ...user, age: parseInt(target.value) || 0 }))
  }

  // Array signal methods - demonstrate array manipulation
  addItem(item: string) {
    if (item.trim()) {
      this.items.update(items => [...items, item.trim()])
    }
  }

  removeItem(index: number) {
    this.items.update(items => items.filter((_, i) => i !== index))
  }

  // Update tracking method - demonstrates signal update patterns
  triggerUpdate() {
    this.updateCounter.update(count => count + 1)
    this.lastUpdate.set(new Date().toLocaleTimeString())
  }

  // Reactive Forms methods - form submission and management
  onSubmit() {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value
      this.formData.set(formValue)
      this.submissionCount.update(count => count + 1)
      console.log("Form submitted:", formValue)
    } else {
      // Mark all fields as touched to show validation errors
      this.profileForm.markAllAsTouched()
    }
  }

  resetForm() {
    this.profileForm.reset()
    this.formData.set(null)
  }

  fillSampleData() {
    this.profileForm.patchValue({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "+1-555-0123",
    })
  }
}
