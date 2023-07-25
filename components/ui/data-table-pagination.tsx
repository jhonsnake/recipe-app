


import { Button } from '@/components/ui/button';



const DataTablePagination = ({ table }: any) => {
    return (
        <div className="flex items-center justify-end space-x-2 py-4">
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.canPreviousPage}
            >
                Anterior
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.canNextPage}
            >
                Siguiente
            </Button>
        </div>
    );
};

export default DataTablePagination;
