export async function getQuestions() {
  try {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=50&type=multiple"
    );

    if (!res.ok) {
      throw new Error(`Failed getting data (status ${res.status})`);
    }

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
