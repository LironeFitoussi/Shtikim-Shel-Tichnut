function Form({ onSubmit }) {
    const [isPending, startTransition] = useTransition();
    return (
      <form onSubmit={onSubmit}>
        <SubmitButton isPending={isPending} />
      </form>
    );
  }
  
  function SubmitButton({ isPending }) {
    return (
      <button type="submit" disabled={isPending}>
        {isPending ? 'Sending.' : 'Send'}
      </button>
    );
  }