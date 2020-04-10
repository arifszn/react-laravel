@section('title')
    Leads
@endsection

@section('styles')
    <link rel="stylesheet" href="{{ asset('css/Leads.css') }}">
    <style>
        
    </style>
@endsection

@extends('user.layout.master')

@section('container')
    <div id="app"></div>
@endsection

@section('scripts')
<script src="{{ asset('js/views/Leads.js') }}"></script>

<script type="text/javascript">
    $(function () {
		
	});
</script>


@endsection