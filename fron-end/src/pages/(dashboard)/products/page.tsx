import { IProduct } from "@/common/types/product";
import SkeletonTable from "@/components/SkeletonTable";
import instance from "@/configs/axios";
import { PlusCircleFilled } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Skeleton, Table } from "antd";
import { Link } from "react-router-dom";

const ProductPage = () => {
    return (
      <>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-1xl font-semibold">list products</h1>
      </div>
      </>
    );
};

export default ProductPage;
