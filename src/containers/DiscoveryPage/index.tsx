import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getApp } from "../../api/api";
import { Button } from "@mui/material";

type DataRow = {
  id: string;
  appName: string;
  category: string;
  appSources: string[];
};

type Filter = {
  appName: string;
  category: string;
  pageNumber: number;
  pageSize: number;
};

const DiscoveryPage = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [page, setPage] = useState(0);

  const loadData = async (filter: Filter) => {
    const data = await getApp(filter);
    setData(data.appRows);
  };

  useEffect(() => {
    loadData({
      appName: "",
      category: "",
      pageNumber: 0,
      pageSize: 25,
    });
  }, []);

  useEffect(() => {
    loadData({
      appName: "",
      category: "",
      pageNumber: page,
      pageSize: 25,
    });
  }, [page]);

  const handleSearch = () => {
    loadData({
      appName: searchName || "",
      category: searchCategory || "",
      pageNumber: 0,
      pageSize: 25,
    });
  };

  const sortedData = () => {
    const sorted = [...data].sort((a, b) => {
      const nameA = a.appName.toLowerCase();
      const nameB = b.appName.toLowerCase();
      return nameA.localeCompare(nameB)
    })

    setData(sorted);
  }

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentBlock}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={sortedData} style={{cursor: "pointer"}}>Name</th>
              <th>Category</th>
              <th>Connection</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={styles.row}>
                <td>{row.appName}</td>
                <td>{row.category}</td>
                <td>{row.appSources[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
            Prev
          </Button>
          <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
        </div>
      </div>
      <div className={styles.filterBlock}>
        <div className={styles.headerTitle}>
          <p>Filter</p>
        </div>
        <div className={styles.actionBlock}>
          <input
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Name Filter"
          />
          <input
            onChange={(e) => setSearchCategory(e.target.value)}
            placeholder="Category Filter"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPage;
