@section('title')
	Home
@endsection

@section('styles')

@endsection

@extends('user.layout.master')

@section('container')
	<div id="app"></div>
@endsection

@section('scripts')
<script>
    var authUser = @json(Auth::user());
</script>
<script src="{{ asset('js/views/Dashboard.js') }}"></script>
@endsection