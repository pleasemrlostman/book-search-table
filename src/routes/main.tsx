import usePersonTableData from "@/hooks/usePersonTableData";
import { personData, personColumns } from "@/utils/test";
import DatePicker from "@/components/date-picker";
import Table from "@/components/table";
import { Person } from "test";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Select from "@/components/select";
import { Sheet as SheetIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Main = () => {
  const { tableData, tableColumns } = usePersonTableData<Person>({
    data: personData,
    columns: personColumns,
  });

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    // 페이지네이션을 추가해주려면 해당 코드를 추가해줘야함
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="flex gap-2 items-center justify-end mb-2">
        <DatePicker />
        <Select
          onValueChange={(value) => {
            table.setPageSize(parseInt(value));
          }}
        />
        <Button variant={"outline"} className="flex gap-2">
          <SheetIcon color="#e5e7eb" />
          다운로드
        </Button>
      </div>

      <Table<Person> table={table} />
    </>
  );
};

export default Main;