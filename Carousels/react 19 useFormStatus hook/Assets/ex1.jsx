function Form({ onSubmit }) {
    return (
      <form action={onSubmit}>
        <SubmitButton />
      </form>
    );
  }
  
  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending}>
        {pending ? 'Sending...' : 'Send'}
      </button>
    );
  }