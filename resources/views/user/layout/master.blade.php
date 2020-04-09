<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta property="csrf-token" content="{{ csrf_token() }}"/>
    <title> @yield('title') </title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{asset('assets/vendors/mdi/css/materialdesignicons.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendors/css/vendor.bundle.base.css')}}">
    
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <!-- End layout styles -->
    <link rel="shortcut icon" href="{{asset('assets/images/favicon.png')}}" />
    @yield('styles')
  </head>
  <body>
    <div class="container-scroller">
      @include('user.layout.partials._navbar')
      <div class="container-fluid page-body-wrapper">
        @include('user.layout.partials._sidebar')
        @yield('container')
      </div>
    </div>
    <script src="{{asset('assets/vendors/js/vendor.bundle.base.js')}}"></script>
    
    <!-- inject:js -->
    <script src="{{asset('assets/js/off-canvas.js')}}"></script>
    <script src="{{asset('assets/js/hoverable-collapse.js')}}"></script>
    <script src="{{asset('assets/js/misc.js')}}"></script>
    @include('global_script')
    @yield('scripts')
    <!-- endinject -->
    {{-- toaster message start--}}
    @if (session('error-toaster'))
      <script>
        @php
          session('error-toaster')
        @endphp
      </script>
    @endif

    @if (session('success-toaster'))
      <script>
        @php
          session('success-toaster')
        @endphp
      </script>
    @endif
  </body>
</html>