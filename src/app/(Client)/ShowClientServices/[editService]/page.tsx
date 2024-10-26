import ClientServiceForm from "@/components/clientServiceForm";

const EditClintService = (props: any) => {
  return <ClientServiceForm id={props.params["editService"]} />;
};

export default EditClintService;
