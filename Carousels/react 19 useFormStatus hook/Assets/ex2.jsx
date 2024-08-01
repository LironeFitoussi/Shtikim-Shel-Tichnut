function Form() {
    return (
      <form action={submitForm}>
        <input name="username" />
        <Suspense fallback={<SubmittingFallback />}>
          <SubmitButton />
        </Suspense>
      </form>
    );
  }
  
  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    );
  }
  
  function SubmittingFallback() {
    return <p>Form is being submitted...</p>;
  }