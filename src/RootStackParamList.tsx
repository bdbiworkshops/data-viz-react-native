// Define the type for the parameters passed to each screen
type DataInputScreenParams = {
  // You can define any specific parameters expected by the DataInputScreen here
};

type DashboardScreenParams = {
  formData: {
    amount: number;
    date: number;
  };
  // You can define any specific parameters expected by the DashboardScreen here
};

// Define a root stack parameter list to include all screens in your stack navigator
type RootStackParamList = {
  DataInput: DataInputScreenParams;
  Dashboard: DashboardScreenParams;
  // Add more screens here if needed
};

export type {RootStackParamList};
