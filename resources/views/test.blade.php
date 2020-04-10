<div class="container">
    @foreach ($leads as $lead)
        {{ $lead->name }}
    @endforeach
</div>

{{ $leads->links() }}