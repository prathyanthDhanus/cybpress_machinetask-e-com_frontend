import { toast } from "react-hot-toast";
import { Button, Typography, Paper, Divider } from "@mui/material";

// Success Toast
export const showSuccessToast = (message, duration = 4000) => {
  toast.success(
    <Typography
      variant="body1"
      style={{ fontFamily: "Poppins, sans-serif", fontWeight: "regular" }}
    >
      {message}
    </Typography>,

    {
      duration,
    }
  );
};

// Error Toast
export const showErrorToast = (message, duration = 4000) => {
  toast.error(
   
      <Typography
        variant="body1"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: "regular" }}
      >
        {message}
      </Typography>
   ,
    {
      duration,
    }
  );
};

// Confirmation Toast
export const showConfirmationToast = (
  onConfirm,
  message,
  actionLabel,
  duration = 4000
) => {
  toast.custom(
    <Paper
      elevation={3}
      style={{
        background: "rgba(255, 0, 0, 0.1)",
        padding: "16px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body1"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: "regular" }}
      >
        {message}
      </Typography>
      <Divider style={{ margin: "16px 0" }} />
      <div>
        <Button
          onClick={() => toast.dismiss()}
          color="primary"
          variant="outlined"
          size="small"
          style={{ marginRight: "8px" }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            toast.dismiss();
            onConfirm();
          }}
          color="secondary"
          variant="contained"
          size="small"
        >
          {actionLabel}
        </Button>
      </div>
    </Paper>,
    {
      duration,
    }
  );
};
