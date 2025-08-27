import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Mutation 函数可以在调用的时候单独传一个成功处理操作，比如文件BookingDetails里面演示的那样
export function useCheckin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: checkin, isLoading: isChecking } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => toast.error("This is an error in checking"),
  });

  return { checkin, isChecking };
}
