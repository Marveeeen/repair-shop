import { BackButton } from "@/components/back-button";
import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} not found
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }

      return <div>Edit Form</div>;
    } else {
      return <div>New form</div>;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
