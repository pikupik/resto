/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VscAccount } from "react-icons/vsc";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Meja 1",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    infoStatus: "Masih duduk",
  },
  {
    invoice: "Meja 2",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    infoStatus: "Masih duduk",
  },
  {
    invoice: "Meja 3",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    infoStatus: "Masih duduk",
  },
  {
    invoice: "Meja 4",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    infoStatus: "Masih duduk",
  },
  {
    invoice: "Meja 5",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    infoStatus: "Sudah selesai",
  },
  {
    invoice: "Meja 6",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    infoStatus: "Masih duduk",
  },
  {
    invoice: "Meja 7",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
    infoStatus: "Masih duduk",
  },
];

export default function Cashier() {
  return (
    <>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn0-production-images-kly.akamaized.net/8G4G0QRM7yVXbiDI0brDK_7vCr4=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2703284/original/077107500_1547445338-telor.jpg"
          className="w-12 h-8 ml-2 rounded-full flex justify-center items-center"
          alt="Cashier"
        />
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl ml-2 mt-2">history pesanan</h1>
          <VscAccount className="ml-auto text-3xl mt-4 mr-2" />
        </div>
      </div>
      <div className="mt-4 p-4">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nomor Meja</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Info</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.infoStatus}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}
