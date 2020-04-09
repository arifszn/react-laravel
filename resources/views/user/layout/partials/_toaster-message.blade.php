@if (Session::has('error-toaster'))
<script>
  @php
    Session::get('error-toaster')->render()
  @endphp
</script>
@endif

@if (Session::has('success-toaster'))
<script>
  @php
    Session::get('success-toaster')->render()
  @endphp
</script>
@endif