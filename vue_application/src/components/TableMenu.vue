<template>
    <Dropdown>
        <template #trigger class="holder">
            <Table width="20" color="black"
                   title="Add table"
            />
        </template>
        <div class="dropdown-items">
            <div
                    class="drowdown-item"
                    @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()"
            >
                <Table width="20" color="black"
                       title="Add table"
                />
                Add Table
            </div>
            <hr
                    v-if="props.editor.isActive('table')"
            >
            <div
                    class="drowdown-item"
                    v-if="props.editor.isActive('table')"
                    @click="editor.commands.addRowAfter()">
                <TableRow width="20" color="black" title="Add table row"/>
                Add row
            </div>
            <div
                    class="drowdown-item"
                    @click="editor.commands.addColumnAfter()"
                    v-if="props.editor.isActive('table')"
            >
                <TableRow width="20" color="black"
                          title="Add table column"
                          class="rotate"
                />
                Add column
            </div>
            <hr
                    v-if="props.editor.isActive('table')"
            >
            <div
                    class="drowdown-item"
                    v-if="props.editor.isActive('table')"
                    @click="editor.commands.deleteRow()"
            >
                <TableRowRemove width="20" color="black"
                                title="Remove table row"
                />
                Remove row
            </div>
            <div
                    class="drowdown-item"
                    v-if="props.editor.isActive('table')"
                    @click="editor.commands.deleteColumn()"
            >
                <TableRowRemove width="20" color="black"
                                title="Remove table column"
                                class="rotate"
                />
                Remove column
            </div>
            <hr
                    v-if="props.editor.isActive('table')"
            >
            <div
                    class="danger drowdown-item"
                    @click="editor.commands.deleteTable()"
                    v-if="props.editor.isActive('table')"
            >
                <TableRemove width="20" color="black"
                             title="Remove table"
                />
                Remove table
            </div>
        </div>
    </Dropdown>

</template>
<script setup lang="ts">
//@ts-ignore
import Dropdown from 'v-dropdown';

const props = defineProps<{ editor: any }>();

import Table from "./icons/Table.vue";
import TableRow from "./icons/TableRow.vue";
import TableRowRemove from "./icons/TableRowRemove.vue";
import TableRemove from "./icons/TableRemove.vue";
</script>