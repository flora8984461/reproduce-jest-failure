# reproduce playwright out of memory issue with fluentui react-icons

Steps to reproduce:

1. clone the repo, checkout branch: `reproduce-playwright-out-of-memory`, and run `yarn` and `yarn test-ct`
   Note that the test will get error:

```
✓ 1505 modules transformed.

<--- Last few GCs --->

[8908:00000215E683B3A0]    61960 ms: Mark-sweep 4039.1 (4138.8) -> 4036.2 (4138.8) MB, 2008.2 / 0.0 ms  (average mu = 0.560, current mu = 0.050) allocation failure scavenge might not succeed
[8908:00000215E683B3A0]    65264 ms: Mark-sweep 4051.9 (4138.8) -> 4049.5 (4165.3) MB, 3295.0 / 0.0 ms  (average mu = 0.303, current mu = 0.003) allocation failure scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
 1: 00007FF614B10AAF v8::internal::CodeObjectRegistry::~CodeObjectRegistry+124015
 2: 00007FF614A9C866 v8::internal::wasm::WasmCode::safepoint_table_offset+64182
 3: 00007FF614A9D8E2 v8::internal::wasm::WasmCode::safepoint_table_offset+68402
 4: 00007FF6153D1CE4 v8::Isolate::ReportExternalAllocationLimitReached+116
 5: 00007FF6153BC2AD v8::SharedArrayBuffer::Externalize+781
 6: 00007FF61525F88C v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1468
 7: 00007FF61525C9A4 v8::internal::Heap::CollectGarbage+4244
 8: 00007FF61525A320 v8::internal::Heap::AllocateExternalBackingStore+2000
 9: 00007FF61527EEA6 v8::internal::Factory::NewFillerObject+214
10: 00007FF614FB1645 v8::internal::DateCache::Weekday+1797
11: 00007FF61545F9C1 v8::internal::SetupIsolateDelegate::SetupHeap+494417
12: 00000215E89B71FA
error Command failed with exit code 134.
```

There is some open issue in vite and fluentui:
https://github.com/microsoft/fluentui/issues/25547
https://github.com/microsoft/fluentui/issues/24952
https://github.com/vitejs/vite/issues/2433

It happens when I add @fluentui/react-icons. After taking a look at the open issue, seems I can skip generating sourcemap for @fluentui/react-icons. I am not sure if there is an option to set playwright to do that when it bundles.
