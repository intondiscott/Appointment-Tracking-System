import ClientForm from "@/components/clientForm";

const EditClient = (props: any) => {
  return <ClientForm id={props.params["editClient"]} />;
};

export default EditClient;
