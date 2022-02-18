export default function HourDivider(props) {
  return (
    <div class="d-flex align-items-center">
      <span class="me-2 text-muted fs-6">{props.label}</span>
      <span class="flex-fill" style="height: 1px; background-color: #dee2e6;"></span>
    </div>
  );
}
