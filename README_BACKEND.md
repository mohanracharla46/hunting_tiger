# Hunting Tiger Laravel Backend Setup Guide

This document contains the Laravel routes, Eloquent models, controllers, and environment configuration required for the Hunting Tiger API.

---

## 1. Routes (`routes/api.php`)

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\DistributorApplicationController;

Route::prefix('enquiries')->group(function () {
    Route::post('/', [EnquiryController::class, 'store']);
    Route::get('/', [EnquiryController::class, 'index']);
    Route::get('/{enquiry}', [EnquiryController::class, 'show']);
    Route::delete('/{enquiry}', [EnquiryController::class, 'destroy']);
});

Route::prefix('distributor-applications')->group(function () {
    Route::post('/', [DistributorApplicationController::class, 'store']);
    Route::get('/', [DistributorApplicationController::class, 'index']);
    Route::get('/{application}', [DistributorApplicationController::class, 'show']);
    Route::delete('/{application}', [DistributorApplicationController::class, 'destroy']);
});
```

---

## 2. Models

### `app/Models/Enquiry.php`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enquiry extends Model
{
    protected $fillable = [
        'full_name',
        'phone',
        'state',
        'district_city',
        'product_interest',
        'message',
    ];
}
```

### `app/Models/DistributorApplication.php`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DistributorApplication extends Model
{
    protected $fillable = [
        'business_name',
        'contact_person',
        'phone',
        'state',
        'district_city',
        'primary_interest',
    ];
}
```

---

## 3. Controllers

### `app/Http/Controllers/EnquiryController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\Request;

class EnquiryController extends Controller
{
    // Store enquiry
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'state' => 'required|string|max:100',
            'district_city' => 'required|string|max:100',
            'product_interest' => 'nullable|string|max:255',
            'message' => 'nullable|string',
        ]);

        $enquiry = Enquiry::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Enquiry submitted successfully',
            'data' => $enquiry
        ], 201);
    }

    // Get all enquiries
    public function index()
    {
        $enquiries = Enquiry::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $enquiries
        ]);
    }

    // Get one enquiry
    public function show(Enquiry $enquiry)
    {
        return response()->json([
            'success' => true,
            'data' => $enquiry
        ]);
    }

    // Delete enquiry
    public function destroy(Enquiry $enquiry)
    {
        $enquiry->delete();

        return response()->json([
            'success' => true,
            'message' => 'Enquiry deleted successfully'
        ]);
    }
}
```

### `app/Http/Controllers/DistributorApplicationController.php`

```php
<?php

namespace App\Http\Controllers;

use App\Models\DistributorApplication;
use Illuminate\Http\Request;

class DistributorApplicationController extends Controller
{
    // Store distributor application
    public function store(Request $request)
    {
        $validated = $request->validate([
            'business_name' => 'required|string|max:255',
            'contact_person' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'state' => 'required|string|max:100',
            'district_city' => 'required|string|max:100',
            'primary_interest' => 'required|string|max:255',
        ]);

        $application = DistributorApplication::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Distributor application submitted successfully',
            'data' => $application
        ], 201);
    }

    // Get all applications
    public function index()
    {
        $applications = DistributorApplication::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $applications
        ]);
    }

    // Get one application
    public function show(DistributorApplication $application)
    {
        return response()->json([
            'success' => true,
            'data' => $application
        ]);
    }

    // Delete application
    public function destroy(DistributorApplication $application)
    {
        $application->delete();

        return response()->json([
            'success' => true,
            'message' => 'Distributor application deleted successfully'
        ]);
    }
}
```

---

## 4. Environment Configuration (`.env`)

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hunting_tiger
```
